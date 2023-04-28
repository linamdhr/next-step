function Mailbox(props) {
  console.log("ha ha ha", props.unreadMessages);
  const unreadMessages = props.unreadMessages;

  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
}
export default Mailbox;
