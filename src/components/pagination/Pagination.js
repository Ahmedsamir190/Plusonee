// function Pagination() {

const Paginationn = ({ productsperpage, totalproduct, setCurrentpage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalproduct / productsperpage); i++) {
    pageNumbers.push(i);
  }

  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav aria-label="...">
      <ul className="pagination position-absolute bottom-0 start-50 translate-middle ">
        {pageNumbers.map((number) => {
          return (
            <li className="page-item" key={number}>
              <button
                className="page-link text-black "
                aria-current="page"
                onClick={() => {
                  setCurrentpage(number);
                  scroll();
                }}
              >
                {number}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Paginationn;
