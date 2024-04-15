// =========> Error = Handling <=========
import { useRouteError, Link, useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";

export const ErrorElement = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="error">
      <Card border="danger" style={{ width: "30rem" }} text={"danger"} className="mb-2 justify-content-center align-items-center">
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body className="">
          <Card.Title>
            <b> Error</b>
          </Card.Title>
          <Card.Text>
            <p>{error.message || error.statusText}</p>
          </Card.Text>
          <div className="justify-content-center">
            <button className="btn btn-dark mx-4" onClick={() => navigate(-1)}>
              <span>Go Back</span>
            </button>
            <Link to="/" className="btn btn-dark mx-4">
              <span>Go home</span>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};


// =========> Provise = Waiting <=========
export const waait = () => new Promise((res) => setTimeout(res, Math.random() * 800));

// ===========> Local storage reader <================
export const LocalStorageLoader = (jsonData) => {
  return JSON.parse(localStorage.getItem(jsonData));
};

// =========> Get = all items from local storage <=========
export const getAllMatchingItems = ({ category, key, value }) => {
  const data = LocalStorageLoader(category) ?? [];
  return data.filter((item) => item[key] === value);
};

// =========> Delete = item from local storage <=========
export const deleteItem = ({ key, id }) => {
  const existingData = LocalStorageLoader(key);
  if (id) {
    const newData = existingData.filter((item) => item.id !== id);
    return localStorage.setItem(key, JSON.stringify(newData));
  }
  return localStorage.removeItem(key);
};

// =========> Loader = LocalStorageLoader <=========
export function userLoader() {
  const user = LocalStorageLoader("user");
  //   console.log(user);
  return { user };
}

// =========> colors <=========
export const generateRandomColor = () => {
  const randNum = Math.floor(Math.random() * 30);
  return `${randNum} 65% 50%`;
};
