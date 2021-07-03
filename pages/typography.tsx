import Head from 'next/head';
import {
    Headline,
    Body,
    Button,
    Subtitle,
    Link,
} from '../typography';

export default function Typography() {
    
    return (
        <>
            <Head>
                <title>Typography</title>
            </Head>
            <div>
                <Headline type={1}>
                    Headline 1
                </Headline>
                <br />
                <Headline type={2}>
                    Headline 2
                </Headline>
                <br />
                <Headline type={3}>
                    Headline 3
                </Headline>
                <br />
                <Headline type={4}>
                    Headline 4
                </Headline>

                <br /><br /><br />

                <Body type={1}>
                    Body 1
                </Body>
                <br />
                <Body type={2}>
                    Body 2
                </Body>
                <br />
                <Body type={3}>
                    Body 3
                </Body>
                <br />
                <Body type={4}>
                    Body 4
                </Body>
                <br />
                <Body type={5}>
                    Body 5
                </Body>
                <br />
                <Body type={6}>
                    Body 6
                </Body>
                <br />
                <Body type={7}>
                    Body 7
                </Body>
                <br />
                <Body type={8}>
                    Body 8
                </Body>

                <br /><br /><br />

                <Button type={1}>
                    Button 1
                </Button>
                <br />
                <Button type={2}>
                    Button 2
                </Button>
                <br />
                <Button type={3}>
                    Button 3
                </Button>

                <br /><br /><br />

                <Subtitle>
                    Subtitle
                </Subtitle>

                <br /><br /><br />

                <Link>
                    Link
                </Link>

                <br /><br /><br />
            </div>
        </>
    )
}