import React from 'react'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Message,
  Card,
  Icon
} from 'semantic-ui-react'

var bgColors = {
  "Blue" : "#0c98a0"
};

const CardExampleFluid = () => (
  <Card.Group>
    <Card>
    <Image src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Kyle Benson</Card.Header>
      <Card.Meta>Joined in 2019</Card.Meta>
      <Card.Description>
        Kyle is a Senior Product manager living in Apex, NC
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        10 Friends
      </a>
    </Card.Content>
    </Card>
    <Card>
      <Image src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Blue03&eyeType=Wink&eyebrowType=DefaultNatural&mouthType=Eating&skinColor=Light' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Colin McNaughton</Card.Header>
        <Card.Meta>Joined in 2019</Card.Meta>
        <Card.Description>
          Colin is a Technical Marketing Manager living in Holly Springs, NC
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          10 Friends
        </a>
      </Card.Content>
    </Card>
    <Card>
    <Image src='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairCurvy&accessoriesType=Blank&hairColor=Brown&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=PastelYellow&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Ann Perkins</Card.Header>
      <Card.Meta>Joined in 2019</Card.Meta>
      <Card.Description>
        Ann Perkins is a nurse living in Pawnee, IN.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        10 Friends
      </a>
    </Card.Content>
    </Card>
    <Card>
      <Image src='https://avataaars.io/?avatarStyle=Transparent&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=SilverGray&facialHairType=BeardMedium&facialHairColor=BlondeGolden&clotheType=ShirtVNeck&clotheColor=White&eyeType=WinkWacky&eyebrowType=UpDownNatural&mouthType=Sad&skinColor=Yellow' wrapped ui={false} />
      <Card.Content>
        <Card.Header>The Dude</Card.Header>
        <Card.Meta>Joined in 1998</Card.Meta>
        <Card.Description>
          The Dude Abides
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          10 Friends
        </a>
      </Card.Content>
    </Card>
    <Card>
      <Image style={{backgroundColor: bgColors.Blue}} src='https://img.icons8.com/pastel-glyph/2x/plus.png' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Your Name Here</Card.Header>
        <Card.Description>
          Tell us a little about yourself
        </Card.Description>
      </Card.Content>
    </Card>
  </Card.Group>
)

export default CardExampleFluid