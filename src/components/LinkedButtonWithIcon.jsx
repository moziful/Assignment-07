import Link from "next/link";

const LinkedButtonWithIcon = ({
  icon: Icon,
  color,
  textColor,
  label,
  href,
  active = false,
}) => {
  return (
    <Link
      href={href}
      className={`btn w-fit flex gap-1 items-center ${
        active
          ? "bg-green-950 text-white hover:bg-green-900"
          : "btn-ghost"
      } ${color || ""} ${textColor || ""}`}
    >
      {Icon && <Icon />}
      {label}
    </Link>
  );
};

export default LinkedButtonWithIcon;
