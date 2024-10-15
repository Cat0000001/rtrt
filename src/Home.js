import React from "react";
import { useAuth } from "./AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
const Home = () => {
const { user, signInWithGoogle, signOut } = useAuth();
return (
<div className="container mt-5">
<div className="row justify-content-center">
<div className="col-md-6">
<div className="card">
<div className="card-body">
<h2 className="card-title text-center mb-4">
<img src="24005.jpg" alt="Google Logo" style={{ width: '150px', height: '150px', marginRight: '10px' }} />
</h2>
{user ? (
<>
<p className="card-text">Email: {user.email}</p>
<img
src={user.photoURL}
alt="User Profile"
className="img-fluid rounded-circle"
/>
<br />
<button
className="btn btn-danger btn-block"
onClick={signOut}
>
Sign Out
</button>

</>
) : (
<>
<section className="bg-info p-3 m-2 rounded">
<p className="card-text text-center mb-4">
  <img src="32-การ์ตูนเด็ก2.webp" alt="Google Logo" style={{ width: '100px', height: '100px', marginRight: '10px' }} />

Please sign in to access your account.
</p>
{/* Sample login form */}
<form>
<div className="mb-3">
<label htmlFor="email" className="form-label">
Email address
</label>
<input
type="email"
className="form-control"
id="email"
placeholder="Enter your email"
/>
</div>
<div className="mb-3">
<label htmlFor="password" className="form-label">
Password
</label>
<input
type="password"
className="form-control"
id="password"
placeholder="Enter your password"
/>
</div>
<button
type="submit"
className="btn btn-primary btn-block"
>
Sign In
</button>
</form>
{/* Sign in with Google button */}
<button

className="btn btn-primary btn-block mt-3"
onClick={signInWithGoogle}
style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#4285F4', color: 'white', padding: '10px', borderRadius: '5px', border: 'none', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
  <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google Logo" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
ดำเนินการต่อด้วย Google

</button>
</section>
</>
)}
</div>
</div>
</div>
</div>
</div>
);
};
export default Home;