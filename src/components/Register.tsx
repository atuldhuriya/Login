import Image from "next/image";
import pic from "@/img/google.svg";

const Register = () => {
    return (
        <div className="relative flex justify-center items-center h-screen bg-gray-100 bg-cover">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96" style={{width: "75%",display: "flex", marginTop: "-6.1em",flexDirection: "row",justifyContent: "space-between",
                flexWrap:"wrap"
            }}>
                <div className="mb-4">
                    <Image src={pic} alt="Google Logo" className="w-16 mx-auto mb-2 ms-4 me-3" />
                    <h1 className="text-2xl ms-5 me-4 font-semibold">Sign Up a Google Account</h1>
                    <p className="ms-5 me-3">Enter your name</p>
                </div>
                <form className="" style={{minWidth: "40%"}}>
                    <div className="mb-4">
                        <input type="text" placeholder="Full Name" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-6">
                        <input type="password" placeholder="Password" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="flex items-center justify-end">
                        <button type="submit" className="px-4 py-2 bg-blue-500 ms-5 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
