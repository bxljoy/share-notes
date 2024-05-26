export default function Profile({ name }: { name: string | undefined | null }) {
  return (
    <div className="w-full flex-center flex-col">
      <div>{name}</div>
    </div>
  );
}
