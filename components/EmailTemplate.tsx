interface EmailTemplateProps {
  name: string;
  message: string;
}

export const EmailTemplate = ({ name, message }: EmailTemplateProps) => {
  return (
    <div>
      <h1>Hi Tanmay!</h1>
      <h3>{name} says,</h3>
      <p>{message}</p>
    </div>
  );
};
export default EmailTemplate;
