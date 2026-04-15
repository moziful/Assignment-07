import Link from "next/link";

const LinkedButtonWithIcon = ({
  icon: Icon,
  color,
  textColor,
  label,
  href,
}) => {
  return (
    <Link
      href={href}
      className={`btn btn-ghost w-fit flex gap-1 items-center ${color || ""} ${textColor || ""}`}
    >
      {Icon && <Icon />}
      {label}
    </Link>
  );
};

export default LinkedButtonWithIcon;
