import "./facultyforms.css";
import toast, { Toaster } from "react-hot-toast";
import SideBar from "../shared/sidebar/sidebar";
import Header from "../shared/header/header";
import { api } from "../../api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function FacultyForms() {
  const [forms, setForms] = useState([]);
  const navigate = useNavigate();
  const getAllForms = async () => {
    try {
      const response = await api.get("register");
      console.log(response, "response");
      setForms(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllForms();
  }, []);
  return (
    <div className="parent">
      <div className="childleft">
        <div className="sidnav">
          <SideBar />
        </div>
      </div>
      <div className="childright">
        <div className="header">
          <Header title="Faculty Forms" />
        </div>
        <div className="content">
          <div className="card mt-3">
            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>View Form Data</th>
                  </tr>
                </thead>
                <tbody>
                  {forms.map((form: any) => {
                    return (
                      <tr>
                        <td>{form.email}</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            type="button"
                            onClick={() => {
                               navigate(`/admin/scores/${form.id}`); 
                            }}
                          >
                            view FormData
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
