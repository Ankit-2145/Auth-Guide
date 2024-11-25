import { auth, signOut } from "@/auth";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit" className="bg-sky-400 py-2 px-4 text-white rounded-md">
          Sign out
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
