import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: "haroldosorio32@gmail.com",
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
    accessToken: process.env.GOOGLE_ACCESS_TOKEN,
  },
});

export const POST = async (request) => {
  const { nameClient, emailClient, products, quantity, priceTotal } =
    await request.json();
  console.log(nameClient, emailClient, products, quantity, priceTotal);
  // Configura el cuerpo del correo
  const mailOptions = {
    from: "haroldosorio32@gmail.com",
    to: emailClient,
    subject: "Detalles de tu compra",
    html: `
        <p>hola ${nameClient},</p>
        <p>Gracias por tu compra. Aquí están los detalles de tu pedido:</p>
        <!-- Aquí puedes incluir detalles específicos de los productos, cantidades, etc. -->
        <p>Compra:</p>
        <p></p>
        ${products.map(
          (product) =>
            `<p>Producto: ${product.title}</p>
            <p>Cantidad: ${product.quantity}</p>
            <p>Precio: ${product.price}</p>`
        )}
        <p></p>
        <p>Precio total de la compra: ${priceTotal}</p>
      `,
  };

  try {
    // Envía el correo
    await transporter.sendMail(mailOptions);
    console.log("Correo enviado con éxito");
    return Response.json({ message: "Correo enviado con éxito" });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Error al enviar el correo" });
  }
};
