import Button from "./Button/Button";

export default function FeedbackSection() {
  return (
    <section>
      <h3>Feedback</h3>

      <form>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" className="control" />

        <label htmlFor="reason">Reason</label>
        <select id="reason" className="control">
          <option value="error">Error</option>
          <option value="help">Help</option>
          <option value="suggest">Suggestion</option>
        </select>

        <Button>Send</Button>
      </form>
    </section>
  );
}
