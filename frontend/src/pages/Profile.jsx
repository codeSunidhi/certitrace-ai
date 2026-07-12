import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Profile = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="bg-white p-10 rounded-xl shadow">
          <h1 className="text-3xl font-bold mb-4">
            User Profile
          </h1>

          <p>
            This page is protected using JWT authentication.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Profile;