import './TrendingFeed.css';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComments, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const convertNumber = (number) => {
    if (number < 1000) return number;
    if (number >= 1000 && number < 100000) return Math.round(number / 1000) + "." + Math.round(number / 100) % 10 + "k";
    if (number >= 100000 && number < 1000000) return Math.round(number / 1000) + "k";
    if (number >= 1000000) return Math.round(number / 1000000) + "." + Math.round(number / 100000) % 10 + "M";
}

const TrendingFeed = () => {
    const [trendingPosts, setTrendingPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const axios = require("axios").default;
    const options = {
        method: 'GET',
        url: 'https://tiktok33.p.rapidapi.com/trending/feed',
        headers: {
            'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
            'x-rapidapi-key': "c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66"
        }
    };

    useEffect(() => {
        const fetchTrendingPosts = async () => {
            setLoading(true);
            await axios.request(options).then(function (response) {
                console.log(response.data);
                setTrendingPosts(response.data);
            }).catch(function (error) {
                console.error(error);
            });
            setLoading(false);
        }
        fetchTrendingPosts();
    }, []);


    if (loading) return (
        <div class="text-center pt-5">
            <div class="spinner-border" role="status">
                <span class="sr-only"></span>
            </div>
        </div>
    );

    else return (
        <Container>
            {
                trendingPosts.map(post =>
                    <Container key={post.id}>
                        <Row className="justify-content-center my-5">

                            <Col sm="auto" xs={12} className="text-center">
                                <video height={post.videoMeta.height * 0.4} width={post.videoMeta.width * 0.4} controls loop autoPlay="autoplay" muted>
                                    <source src={post.videoUrl} type="Video/mp4"></source>
                                </video>
                            </Col>

                            <Col sm={4} xs={12} className="py-3">
                                <Container className="videoAuthor px-0 pb-3">
                                    <Link className="authorLink" to={"/tiktuk/" + post.authorMeta.name}>
                                        <Row>
                                            <Col xs="auto">
                                                <img className="AvatarXS" src={post.authorMeta.avatar} />
                                            </Col>
                                            <Col className="px-0">
                                                <p className="authorName">{post.authorMeta.name}</p>
                                                <p className="authorNickName">{post.authorMeta.nickName}</p>
                                            </Col>
                                        </Row>
                                    </Link>
                                </Container>
                                <p className="videoDescription">{post.text}</p>
                                <Container className="videoStatistic">
                                    <Row>
                                        <Col className="text-center"><FontAwesomeIcon icon={faHeart} size="lg" /><p>{convertNumber(post.diggCount)}</p></Col>
                                        <Col className="text-center"><FontAwesomeIcon icon={faComments} size="lg" /><p>{convertNumber(post.commentCount)}</p></Col>
                                        <Col className="text-center"><FontAwesomeIcon icon={faEye} size="lg" /><p>{convertNumber(post.playCount)}</p></Col>
                                    </Row>
                                </Container>
                            </Col>

                        </Row>
                    </Container >
                )
            }
        </Container >
    )
}

export default TrendingFeed;