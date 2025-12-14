interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => {
  return (
    <div>
      <h1>Hi Tanmay!</h1>
      <h3>{name} says,</h3>
      <p>{message}</p>
      <h3>You can respond to {email}</h3>
    </div>
  );
};
export default EmailTemplate;
