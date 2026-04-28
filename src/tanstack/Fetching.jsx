import { useMutation } from "@tanstack/react-query";

function AddUser() {
  const addUser = useMutation({
    mutationFn: async (newUser) => {
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!res.ok) {
        throw new Error("Failed to add user");
      }

      return res.json();
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name: "Risal",
      email: "risal@example.com",
    };

    addUser.mutate(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" disabled={addUser.isPending}>
        {addUser.isPending ? "Adding..." : "Add User"}
      </button>

      {addUser.isError && <p>{addUser.error.message}</p>}
      {addUser.isSuccess && <p>User added!</p>}
    </form>
  );
}

export default AddUser;