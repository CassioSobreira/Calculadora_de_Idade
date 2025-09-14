import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  
  const activeLinkStyle = {
    backgroundColor: '#22d3ee', 
    color: '#0f172a'       
  };

  return (
    <div className="bg-slate-900 min-h-screen flex items-center justify-center font-sans p-4">
      <main className="bg-slate-800/60 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-2xl border border-slate-700 w-full max-w-lg">
        <nav className="flex justify-center gap-2 md:gap-4 mb-8">
          <NavLink
            to="/"
            style={({ isActive }) => isActive ? activeLinkStyle : undefined}
            className="text-white font-bold py-2 px-4 rounded-full transition-colors text-sm md:text-base"
          >
            Calculadora de Idade
          </NavLink>
          <NavLink
            to="/evento-futuro"
            style={({ isActive }) => isActive ? activeLinkStyle : undefined}
            className="text-white font-bold py-2 px-4 rounded-full transition-colors text-sm md:text-base"
          >
            Evento Futuro
          </NavLink>
        </nav>
        
        {}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;