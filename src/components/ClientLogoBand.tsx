import Image from "next/image";

export function ClientLogoBand({
  client,
  clientLogo,
  clientLogoDark,
  className = "",
}: {
  client: string;
  clientLogo: string;
  clientLogoDark: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center border-y border-[var(--border)] bg-card px-5 py-4 ${className}`}
    >
      <div className="h-11 w-[168px] overflow-hidden flex items-center justify-center">
        <Image
          src={clientLogoDark}
          alt={client}
          width={180}
          height={56}
          className="object-contain h-[52px] w-auto max-w-none scale-[1.35] origin-center hidden dark:block"
        />
        <Image
          src={clientLogo}
          alt={client}
          width={180}
          height={56}
          className="object-contain h-[52px] w-auto max-w-none scale-[1.35] origin-center dark:hidden"
        />
      </div>
    </div>
  );
}
