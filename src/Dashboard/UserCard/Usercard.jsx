
function Usercard(props) {
    return (
        <div>
            <div className="bg-white shadow-lg rounded-2xl p-4 w-80">
                <h2 className="text-xl font-semibold text-gray-800">John Doe</h2>
                <p className="text-gray-600">Software Engineer</p>
                <span className="inline-block px-3 py-1 mt-2 text-sm font-medium bg-green-200 text-green-800 rounded-full">
                    Active
                </span>
                <p className="mt-2 text-gray-700 font-medium">Frontend Developer</p>
            </div>
        </div>
    );
}

export default Usercard;