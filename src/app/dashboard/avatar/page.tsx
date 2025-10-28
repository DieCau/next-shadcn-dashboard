import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Page() {
  return (
    <div className="flex flex-row justify-center items-center">
       <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>DC</AvatarFallback>
      </Avatar>
      <p className="m-2">@diego</p>
    </div>
  );
}