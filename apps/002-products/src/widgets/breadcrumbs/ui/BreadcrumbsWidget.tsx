import { NavLink, useMatches } from "react-router-dom";

type BreadcrumbHandle = {
  crumb: string | (() => string);
}

export const BreadcrumbsWidget = () => {
  const matches = useMatches();

  return (
    <>
      <div className="bg-gray-500 p-3">
        <nav className="container mx-auto flex gap-2">
          <ul className="flex gap-1 font-normal text-gray-200">
            {matches
              .filter((m) => {
                const handle = m.handle as BreadcrumbHandle | undefined;
                return handle?.crumb;
              })
              .map((m, i, arr) => {
                const handle = m.handle as BreadcrumbHandle;
                const crumb = typeof handle.crumb === "function" ? handle.crumb(m.params) : handle.crumb;
                const isLast = i === arr.length - 1;

                return (
                  <li key={m.pathname} className="flex gap-1">
                    {i > 0 && <span>/</span>}
                    {isLast ? <span aria-current="page" className="font-medium">{crumb}</span> :
                      <NavLink to={m.pathname} className="cursor-pointer hover:underline">{crumb}</NavLink>}
                  </li>
                )
              }
              )}
          </ul>
        </nav >
      </div>
    </>
  );
}