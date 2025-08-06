import "./form.css";

function Form() {
  return (
    <div className="form-container">
      <h1>Report an Issue</h1><br  /> <br /> 
      <form
        action="http://localhost:8000/submit.php"
        method="POST"
      >
        <div className="form-group">
          <label htmlFor="name1">Name(Put - for anonymous)</label>
          <input type="text" id="name1" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Class and Roll No.(Put - for anonymous)</label>
          <input type="text" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Complaint</label>
          <textarea id="message" name="message" required></textarea>
        </div>

        <button
          type="submit"
          className="submit-btn"
          onClick={() => alert("Form Submitted.")}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
