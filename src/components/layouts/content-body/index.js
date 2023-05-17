import "./style.css";

/**
 * Обёртка для компонентов, создание границы контента 
 * @param {React.ReactNode} param0 
 * @returns 
 */
function ContentBody({children}) {
  return (
    <div className="content-body">
      {children}
    </div>
  );
}

export default ContentBody;