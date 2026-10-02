import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

interface Props {
  badge: boolean;
  src: string;
}

export function AvatarWithBadge({ badge, src }: Props) {
  return (
    <Avatar className="w-6 h-6">
      <AvatarImage src={src} alt="avatar" />
      <AvatarFallback className="rounded-lg">CN</AvatarFallback>
      <AvatarBadge
        className={badge ? "bg-green-600 dark:bg-green-800" : "hidden"}
      />
    </Avatar>
  );
}
