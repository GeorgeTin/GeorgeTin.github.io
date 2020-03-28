import React, { Component, Suspense } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Content from '../articles/article-first-article/first-article';
import ErrorBoundary from './ErrorBoundary'

class Article extends Component {

    constructor(props) {
        super(props)
        this.state={}
    }

    articleIdFromPath(path) {
        this.articleId = path.split('/')[2]
    }

    componentWillMount() {
        this.articleIdFromPath(window.location.hash)
        this.otherComponent = React.lazy(() => import('../articles/article-' + this.articleId + '/' + this.articleId))
    }

    render() {
        return (
            
            <Container className={Row}>
                <Row>
                    <Col xs="0" sm="2" md="1"></Col>
                    <Col xs="12" sm="8" md="10">
                        <ErrorBoundary>
                            <Suspense fallback={<div>Loading...</div>}>
                                <this.otherComponent></this.otherComponent>
                            </Suspense>
                        </ErrorBoundary>
                    </Col>
                    <Col xs="0" sm="2" md="1"></Col>
                </Row>
            </Container>
        )
    }
}

export default Article