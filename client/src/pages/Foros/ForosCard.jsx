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

        {/* Div del contenido principal (derecha) */}
        <div style={{ flex: "1" }}>
          <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
            <p style={{ color: "#00CC00" }}>{foro.usuario_id}</p>

            <p style={{ color: "#00CC00" }}>{foro.fecha_creacion}</p>
          </div>

          {/* Div del titulo (abajo) */}
          <div
            style={{ flex: "1", textAlign: "left", alignSelf: "flex-start" }}
          >
            <p>Título: {foro.titulo}</p>
          </div>
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
