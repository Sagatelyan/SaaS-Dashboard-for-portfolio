interface Props {
  title: string;
  count: string | undefined;
}

export default function CustomerKpiCard({ title, count }: Props) {
  return (
    <div className="w-full min-w-80 lg:w-[48%] xl:min-w-60 border-2 rounded-2xl flex flex-col items-center bg-sidebar-accent">
      <div className="w-full flex flex-col gap-1 p-3">
        <span className="text-neutral-400 text-[16px]">{title}</span>
        <h2 className="text-3xl font-semibold text-primary">{count}</h2>
      </div>
    </div>
  );
}
