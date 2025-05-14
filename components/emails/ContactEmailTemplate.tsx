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
    <div>
      <h1>Contact Email Template</h1>

      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Company: {company}</p>
      <p>Title: {title}</p>
      <p>Phone: {phone}</p>
      <p>Message: {message}</p>
    </div>
  );
}
