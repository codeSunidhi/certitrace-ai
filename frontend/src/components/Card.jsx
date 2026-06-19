const Card = ({ icon: Icon, title, description, testId }) => {
  return (
    <div
      data-testid={testId}
      className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-md hover:border-green-200 transition-all duration-200"
    >
      {Icon && (
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
          <Icon className="h-6 w-6" />
        </div>
      )}
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default Card;