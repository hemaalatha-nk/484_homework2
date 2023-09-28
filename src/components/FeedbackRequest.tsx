import { RequestProps, RequestListProps, setstatus } from "../utils/types";

// TODO:
// Make the entire Component functional as per the requirements.
// You may look at types.ts for your reference to know about one of the ways of declaring types.
// Getting an understanding of the types can help you build your solution by backtracking.
// However, You are free to create your own types, states, structure.
// End goal is to make the component functional as per the requirements.

// type setstatus = ({ index }: { index: number }) => void;

function Request({
  deleteData,
  status,
  request,
  index,
  reqCompleted,
}: RequestProps) {
  const isCompleted = reqCompleted.includes(index);

  return (
    <tr
      className="request"
      style={{
        textDecoration: isCompleted ? "line-through" : "",
      }}
    >
      <td>
        <button
          className="btn-close"
          aria-label="cancel"
          type="button"
          onClick={() => deleteData({ index })}
        ></button>
      </td>
      <td>{request.name}</td>
      <td>{request.sdescription}</td>
      <td>{request.emailId}</td>
      <td>{request.ldescription}</td>
      <td>
        <button
          className="btn-primary btn"
          aria-label="complete"
          type="button"
          onClick={() => status({ index })}
        >
          Complete
        </button>
      </td>
    </tr>
  );
}

function RequestList({
  data,
  setData,
  reqCompleted,
  setStatus,
}: RequestListProps) {
  console.log(data);
  const logger: setstatus = (index) => {
    console.log(index);
    // setStatus([1])
    setStatus((reqcompleted) => [...reqcompleted, index.index]);
  };
  const deleteData: setstatus = (index) => {
    console.log(index);
    const newArray = data.filter((e, i) => i !== index.index);
    setData(newArray);
    const reqCompletedlist = reqCompleted.filter((e) => e !== index.index);
    setStatus(reqCompletedlist);
  };
  return (
    <div className="list-container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col"> </th>
            <th scope="col">Name</th>
            <th scope="col">Short Description</th>
            <th scope="col">Email Id</th>
            <th scope="col">Long Description</th>
            <th scope="col">Complete a Request</th>
          </tr>
        </thead>
        <tbody id="main-table-body">
          {/* Put all of the requests here */}
          {/* Try leveraging the Request() already created for you */}
          {data.map((request, index) => (
            <Request
              deleteData={deleteData}
              status={logger}
              request={request}
              index={index}
              reqCompleted={reqCompleted}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AddRequestForm({
  data,

  setData,

}: RequestListProps) {
  console.log(data);

  return (
    <div className="form-contain">
      <div>
        <h1 data-align="center" style={{ marginBottom: "5%" }}>
          Create a Feedback Request
        </h1>
      </div>
      <form id="requestForm" className="login-form">
        <div className="form-outline mb-4">
          <label>Name</label>
          <input
            id="name"
            name="name"
            className="form-control"
            placeholder="Enter Name"
          />
        </div>
        <div className="form-outline mb-4">
          <label>Short Description</label>
          <input
            id="sdescription"
            name="sdescription"
            className="form-control"
            placeholder="Enter Short Description"
          />
        </div>
        <div className="form-outline mb-4">
          <label>Email Id</label>
          <input
            id="emailId"
            name="emailId"
            className="form-control"
            placeholder="Enter Email ID"
          />
        </div>
        <div className="form-group">
          <label htmlFor="textAreaForRequest">Feedback Request</label>
          <textarea
            className="form-control"
            name="ldescription"
            id="ldescription"
            rows={5}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary m-1"
          id="create-req-btn"
          onClick={() => {
            const form = document.querySelector("form");
            console.log(form);
            const fdata = new FormData(form!);
            console.log(
              fdata.get("name")?.toString(),
              fdata.get("emailId"),
              fdata.get("sdescription"),
              fdata.get("ldescription"),
            );
            setData((formdata) => [
              ...formdata,
              {
                name: fdata.get("name")!.toString(),
                emailId: fdata.get("emailId")!.toString(),
                ldescription: fdata
                  .get("ldescription")!
                  .toString(),
                sdescription: fdata
                  .get("sdescription")!
                  .toString(),
              },
            ]);
          }}
        >
          Create Request
        </button>
        <button
          type="button"
          className="btn btn-danger m-1"
          id="reset-req-btn"
          onClick={() => {
            const form = document.querySelector("form");
            form!.reset();
          }}
        >
          Reset Form
        </button>
      </form>
    </div>
  );
}

export { Request, AddRequestForm, RequestList };
