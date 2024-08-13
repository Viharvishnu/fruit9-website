const OrderInputs = ({ setName, setAddress }) => {
  return (
    <div className="w-5/6 max-w-4xl flex flex-col gap-4">
      <label className="flex flex-col gap-2 mb-2">
        Your Name
        <input
          onChange={(event) => setName(event.target.value)}
          type="text"
          className="bg-green-100 border border-green-300 text-green-800 text-sm rounded-lg w-full p-2.5 placeholder-green-800"
          placeholder="Your Name..."
          required
        />
      </label>

      <label className="flex flex-col gap-2 mb-2">
        <span>Your Address</span>
        <span className="block text-sm text-red-500">* We deliver only within 20 kms from Ramapuram, Chennai</span>
        <textarea
          onChange={(event) => setAddress(event.target.value)}
          type="text"
          className="resize-none bg-green-100 border border-green-300 text-green-800 text-sm rounded-lg w-full p-2.5 placeholder-green-800 h-28"
          placeholder="Your Address..."
          required
        />
      </label>
    </div>
  );
};

export default OrderInputs;
