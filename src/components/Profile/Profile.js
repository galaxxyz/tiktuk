import './Profile.css';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUsers, faPlay } from '@fortawesome/free-solid-svg-icons'
import { useParams } from "react-router-dom";
import defaultAvatar from '../../assets/defaultAvatar.png';

// Заглушка
/*const useFetch = (data, nickname) => {
    if (data == 'info')
        return {
            "user": {
                "id": "241418783272443904",
                "shortId": "0",
                "uniqueId": "dave.xp",
                "nickname": "Dave XP",
                "avatarLarger": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1637056800&x-signature=vaMG63dnxQhyn9WpQ1MjYrqZSGo%3D",
                "avatarMedium": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1637056800&x-signature=ghMo1KG8isw9IAbARsqQW0maE9w%3D",
                "avatarThumb": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1637056800&x-signature=e3LiR1eU6YwqkiWWifvzcJUL%2BtI%3D",
                "signature": `🇨🇷 Animator from Costa Rica
Get my app Dollify!
👇`,
                "createTime": 1497901438,
                "verified": true,
                "secUid": "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
                "ftc": false,
                "relation": 0,
                "openFavorite": false,
                "bioLink": {
                    "link": "dollifyapp.com",
                    "risk": 3
                },
                "commentSetting": 0,
                "duetSetting": 0,
                "stitchSetting": 0,
                "privateAccount": false,
                "secret": false,
                "isADVirtual": false,
                "roomId": ""
            },
            "stats": {
                "followerCount": 4800000,
                "followingCount": 67,
                "heart": 76300000,
                "heartCount": 76300000,
                "videoCount": 38,
                "diggCount": 0
            },
            "itemList": []
        };
    if (data == 'feed')
        return (
            [
                {
                    "id": "6949187520152358149",
                    "desc": "Would you have an appointment with Hulk?  😆💪 #animation #chiropractor #hulk #spiderman #marvel #3danimation",
                    "createTime": 1617983807,
                    "video": {
                        "dynamicCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/ab22f7caedb84f16933a3b467d6d2ad9_1617983813?x-expires=1637024400&x-signature=TB%2BQiQlJks1qwVx8Z8V54XLQA60%3D"
                    },
                    "stats": {
                        "diggCount": 41400,
                        "shareCount": 952,
                        "commentCount": 351,
                        "playCount": 1300000
                    }
                },
                {
                    "id": "6919527366356225285",
                    "desc": "Such a fun collab animating with @happykelli ! 😊⛄ #animation #olaf #girllikemechallenge @shakira",
                    "createTime": 1617983807,
                    "video": {
                        "dynamicCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/64f8b8ababc84da9bc182d4953b0bb4c_1611078026?x-expires=1637024400&x-signature=LMiJ5DBENjm7onqISqqL0YquMrQ%3D"
                    },
                    "stats": {
                        "diggCount": 237000,
                        "shareCount": 2857,
                        "commentCount": 1892,
                        "playCount": 1800000
                    }
                },
                {
                    "id": "6908416215497248002",
                    "desc": "Would you have an appointment with Hulk?  😆💪 #animation #chiropractor #hulk #spiderman #marvel #3danimation",
                    "createTime": 1617983807,
                    "video": {
                        "dynamicCover": "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/0badaf73c264480084bed1d818f9bf40_1608490999?x-expires=1637024400&x-signature=KkDXoE0X%2Bt%2FfXqnVBTPcZyqVt7I%3D"
                    },
                    "stats": {
                        "diggCount": 41400,
                        "shareCount": 952,
                        "commentCount": 351,
                        "playCount": 1300000
                    }
                },
                {
                    "id": "6905565464726932737",
                    "desc": "Would you have an appointment with Hulk?  😆💪 #animation #chiropractor #hulk #spiderman #marvel #3danimation",
                    "createTime": 1617983807,
                    "video": {
                        "dynamicCover": "https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/a321ebf4b0d54c83828adc0741ac732f_1607827259?x-expires=1637024400&x-signature=rdOR0Eyphrhl5CNyvJX5sh8U00Y%3D"
                    },
                    "stats": {
                        "diggCount": 41400,
                        "shareCount": 952,
                        "commentCount": 351,
                        "playCount": 1300000
                    }
                },
                {
                    "id": "6897335679903173890",
                    "desc": "Would you have an appointment with Hulk?  😆💪 #animation #chiropractor #hulk #spiderman #marvel #3danimation",
                    "createTime": 1617983807,
                    "video": {
                        "dynamicCover": "https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/ab22f7caedb84f16933a3b467d6d2ad9_1617983813?x-expires=1637024400&x-signature=TB%2BQiQlJks1qwVx8Z8V54XLQA60%3D"
                    },
                    "stats": {
                        "diggCount": 41400,
                        "shareCount": 952,
                        "commentCount": 351,
                        "playCount": 1300000
                    }
                },
            ]);
}*/

const convertNumber = (number) => {
    if (number < 1000) return number;
    if (number >= 1000 && number < 100000) return Math.round(number / 1000) + "." + Math.round(number / 100) % 10 + "k";
    if (number >= 100000 && number < 1000000) return Math.round(number / 1000) + "k";
    if (number >= 1000000) return Math.round(number / 1000000) + "." + Math.round(number / 100000) % 10 + "M";
}

const Profile = () => {
    const { nickname } = useParams();
    const [info, setInfo] = useState('');
    const [feed, setFeed] = useState('');
    const [loading, setLoading] = useState(false);

    const axios = require("axios").default;
    const optionsInfo = {
        method: 'GET',
        url: 'https://tiktok33.p.rapidapi.com/user/info/' + nickname,
        headers: {
            'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
            'x-rapidapi-key': "c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66"
        }
    };
    const optionsFeed = {
        method: 'GET',
        url: 'https://tiktok33.p.rapidapi.com/user/feed/' + nickname,
        headers: {
            'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
            'x-rapidapi-key': "c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66"
        }
    };

    useEffect(() => {
        const fetchInfo = async () => {
            setLoading(true);
            await axios.request(optionsInfo).then(function (response) {
                console.log(response.data);
                setInfo(response.data);
            }).catch(function (error) {
                console.error(error);
            });
            setLoading(false);
        }
        fetchInfo();

    }, [])

    /*useEffect(() => {
        const fetchFeed = async () => {
            const res = await axios.request(optionsFeed).then(function (response) {
                console.log(response.data);
                setFeed(response.data);
            }).catch(function (error) {
                console.error(error);
            });
        }
        fetchFeed();

    }, [])*/

    if (loading) return (
        <div class="text-center pt-5">
            <div class="spinner-border" role="status">
                <span class="sr-only"></span>
            </div>
        </div>
    );

    else if (info) return (

        <Container className="my-4">
            <Row className="justify-content-center">
                <Col sm="auto" xs="auto"><Image className="Avatar" src={info.user.avatarMedium} roundedCircle /></Col>
            </Row>
            <Row className="justify-content-center my-3">
                <Col sm="auto" xs="auto">
                    <div className="userName text-center">{info.user.nickname}</div>
                    <div className="userNickName text-center pb-3">@{info.user.uniqueId}</div>
                    {info.user.signature ? (<div className="userSignature py-3 px-4">{info.user.signature}</div>) : (<p />)}
                </Col>
            </Row>
            <Row className="justify-content-center my-4">
                <Col sm="auto" xs="auto">
                    <Container className="videoStatistic">
                        <Row>
                            <Col xs={4} className="text-center px-4"><FontAwesomeIcon icon={faUsers} size="2x" /><p>{convertNumber(info.stats.followerCount)}</p></Col>
                            <Col xs={4} className="text-center px-4"><FontAwesomeIcon icon={faHeart} size="2x" /><p>{convertNumber(info.stats.heartCount)}</p></Col>
                            <Col xs={4} className="text-center px-4"><FontAwesomeIcon icon={faPlay} size="2x" /><p>{convertNumber(info.stats.videoCount)}</p></Col>
                        </Row>
                    </Container>
                </Col>

            </Row>
        </Container>
    )
    else return (<div></div>)
}

export default Profile;

/*<Row className="justify-content-xs-center">
                    {feed.map(post =>
                        <Col sm={4}>
                            <img src={post.video.dynamicCover} />
                        </Col>
                    )}
                </Row>*/
