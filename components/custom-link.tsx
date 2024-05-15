import clsx from "clsx";
import ArrowTopRightOnSquareIcon from "@heroicons/react/20/solid/ArrowTopRightOnSquareIcon";
import Link from "next/link";

interface CustomLinkProps extends React.LinkHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const CustomLink = ({
  href,
  children,
  className,
  ...rest
}: CustomLinkProps) => {
  const isInternalLink = href.startsWith("/");
  const isAnchorLink = href.startsWith("#");

  if (isInternalLink || isAnchorLink) {
    return (
      <Link href={href} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "inline-flex align-baseline gap-1 items-center underline underline-offset-4",
        className
      )}
      {...rest}
    >
      <span>{children}</span>
      <ArrowTopRightOnSquareIcon className="inline-block ml-0.5 w-4 h-4" />
    </Link>
  );
};

export default CustomLink;
