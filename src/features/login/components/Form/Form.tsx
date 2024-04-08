import { useState, ChangeEvent, SyntheticEvent } from "react";
import { useAppContext } from "@/hooks/useAppContext";
import { checkLogin } from "../../utils";
import { useNavigate } from "react-router-dom";
import { PasswordField } from "./PasswordField";
import { API_BASE_URL } from "@/config";
import { LoginData } from "@/features/login";

export function Login() {
  const { showNotification, login } = useAppContext()
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<LoginData>({
    email: "",
    password: "",
  });


  const handleChange = async (e : ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit =  async (e : SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
        const url  = API_BASE_URL + '/api/login/'
        const data = await checkLogin(url, credentials)
        if (data.access) {
            login(data)
            navigate("/app/map");
        }
    }
    catch(error){
        showNotification({
            show: true,
            content: "No hay una cuenta activa con estas credenciales.",
            type: "error",
            showTime: 5,
        })
    }

  };

  return (
    <>
      
      <div className="flex mx-auto mt-9 min-h-full flex-1 shadow-lg rounded shadow-gray-500/40 relative border border-zinc-300 pb-5">
        <div className="flex flex-1 mx-auto flex-col justify-center px-2 py-2 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto max-w-sm lg:w-96">
            <div className="mt-10">
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Correo electrónico
                    </label>
                    <div className="mt-2">
                      <input
                        name="email"
                        type="email"
                        value={credentials.email}
                        onChange={handleChange}
                        placeholder="Correo electrónico"
                        required
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-green sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Contraseña
                    </label>
                    <PasswordField
                      name="password"
                      value={credentials.password}
                      onChange={handleChange}
                      placeholder={"Contraseña"}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-main-green focus:ring-main-green"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-3 block text-sm leading-6 text-gray-700"
                      >
                        Recuérdame
                      </label>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-main-green px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-zinc-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      Entrar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
