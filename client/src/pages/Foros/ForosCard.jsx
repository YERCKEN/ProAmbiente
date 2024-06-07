import { useContext } from "react";
import { ForosContext } from "../../context/ForosContext";

function ForosCard({ foro }) {
  return (
    // div general
    <div
      style={{
        backgroundColor: "#333333",
        color: "white",
        margin: "20px auto", // Centra el div horizontalmente
        padding: "25px",
        maxWidth: "600px", // Ajusta el tamaño máximo del div
        borderRadius: "10px", // Opcional: redondea las esquinas del div
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        {/* Div de la imagen (izquierda) */}
        <div
          style={{
            flex: "0 0 80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/user.png"
            alt="User"
            style={{
              marginTop: "15px",
              width: "60px", // Ajusta el tamaño de la imagen
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </div>

        {/* Div del contenido principal (centro) */}
        <div style={{ flex: "2" }}>
          <p style={{ color: "#00CC00" }}>{foro.usuario_id}</p>
          <p>Título: {foro.titulo}</p>
        </div>

        {/* Div de la fecha (derecha) */}
        <div style={{ flex: "1", textAlign: "right", alignSelf: "flex-start" }}>
          <p style={{ color: "#00CC00" }}>{foro.fecha_creacion}</p>
        </div>
      </div>

      {/* div para la descripción  */}
      <div
        style={{
          paddingTop: "10px",
        }}
      >
        <p>{foro.descripcion}</p>
      </div>
    </div>
  );
}

export default ForosCard;