interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-8 text-center">

        <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {title}
        </h2>

        {subtitle && (
            <p className="mt-3 text-gray-400 text-base sm:text-lg">
                {subtitle}
            </p>
        )}

    </div>
  );
}