import './UserFeed.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { convertNumber } from '../../functions/convertNumber'
import videoStub from '../../assets/videoStub.png';

const UserFeed = ({ feed, loading }) => {
    if (loading) return (
        <div class="text-center pt-5">
            <div class="spinner-border" role="status">
                <span class="sr-only"></span>
            </div>
        </div>
    );
    return (
        <Row className="justify-content-center" md={7}>
            {feed.map(post =>
                <Col className="my-3" sm="auto" xs="auto">
                    <img className="video" src={videoStub} />
                    <div className="text-center"><FontAwesomeIcon icon={faEye} size="xs" className="iconPlayCount" /><p className="iconPlayCount">{' ' + convertNumber(post.stats.playCount)}</p></div>
                </Col>
            )}
        </Row>
    )
}

export default UserFeed;