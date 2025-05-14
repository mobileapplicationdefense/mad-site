export default function ContactEmailTemplate({
  name,
  email,
  company,
  title,
  phone,
  message,
}: {
  name: string;
  email: string;
  company: string;
  title: string;
  phone: string;
  message: string;
}) {
  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#ffffff",
        borderRadius: "5px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        color: "#333333",
      }}
    >
      <div
        style={{
          backgroundColor: "#4F46E5",
          padding: "15px",
          borderRadius: "5px 5px 0 0",
          marginBottom: "20px",
        }}
      >
        <h1
          style={{
            color: "#ffffff",
            margin: "0",
            fontSize: "24px",
          }}
        >
          New Contact Form Submission
        </h1>
      </div>

      <div style={{ padding: "0 15px 15px" }}>
        <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
          You have received a new message from your website contact form:
        </p>

        <div
          style={{
            backgroundColor: "#f9fafb",
            padding: "15px",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
        >
          <h2
            style={{
              fontSize: "18px",
              borderBottom: "1px solid #e5e7eb",
              paddingBottom: "10px",
              margin: "0 0 15px 0",
            }}
          >
            Contact Information
          </h2>

          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              <tr>
                <td
                  style={{
                    padding: "8px 0",
                    fontWeight: "bold",
                    width: "100px",
                  }}
                >
                  Name:
                </td>
                <td style={{ padding: "8px 0" }}>{name}</td>
              </tr>
              <tr>
                <td style={{ padding: "8px 0", fontWeight: "bold" }}>Email:</td>
                <td style={{ padding: "8px 0" }}>
                  <a
                    href={`mailto:${email}`}
                    style={{ color: "#4F46E5", textDecoration: "none" }}
                  >
                    {email}
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "8px 0", fontWeight: "bold" }}>
                  Company:
                </td>
                <td style={{ padding: "8px 0" }}>{company}</td>
              </tr>
              <tr>
                <td style={{ padding: "8px 0", fontWeight: "bold" }}>Title:</td>
                <td style={{ padding: "8px 0" }}>{title}</td>
              </tr>
              <tr>
                <td style={{ padding: "8px 0", fontWeight: "bold" }}>Phone:</td>
                <td style={{ padding: "8px 0" }}>
                  <a
                    href={`tel:${phone}`}
                    style={{ color: "#4F46E5", textDecoration: "none" }}
                  >
                    {phone}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div
          style={{
            backgroundColor: "#f9fafb",
            padding: "15px",
            borderRadius: "5px",
          }}
        >
          <h2
            style={{
              fontSize: "18px",
              borderBottom: "1px solid #e5e7eb",
              paddingBottom: "10px",
              margin: "0 0 15px 0",
            }}
          >
            Message
          </h2>
          <p
            style={{
              whiteSpace: "pre-wrap",
              margin: "0",
              lineHeight: "1.6",
            }}
          >
            {message}
          </p>
        </div>

        <div
          style={{
            marginTop: "20px",
            padding: "15px 0",
            borderTop: "1px solid #e5e7eb",
            fontSize: "14px",
            color: "#6b7280",
            textAlign: "center" as const,
          }}
        >
          This email was sent automatically from your website's contact form.
        </div>
      </div>
    </div>
  );
}
