import { Pagination, PageItem } from 'react-bootstrap';

const PaginationComponent = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <Pagination>
            {
                pageNumbers.map(number => (
                    <PageItem key={number} active={number === currentPage}>
                        <a href="" onClick={() => paginate(number)}>
                            {number}
                        </a>
                    </PageItem>)
                )
            }
        </Pagination>
    )
}

export default PaginationComponent;
