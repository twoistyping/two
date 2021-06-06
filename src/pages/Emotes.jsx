import React from 'react'
import { Link } from 'react-router-dom'
import PageLabel from '../components/PageLabel'
import Content from '../components/Content'
import ContentInner from '../components/ContentInner'
import ImportantContent from '../components/ImportantContent'
import PageBlurb from '../components/PageBlurb'
import EmoteGrid from '../components/EmoteGrid'
import EmoteSizes from '../components/EmoteSizes'
import Button from '../components/Button'

export default function Emotes() {
  return (
    <Content type="lines">
      <PageLabel label="Emotes" />
      <PageBlurb>
        <h2>Pack of Expressions</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ultrices neque ornare aenean euismod elementum nisi quis. Arcu bibendum at varius vel pharetra vel. Pretium nibh ipsum consequat nisl. Mauris a diam maecenas sed enim ut sem. At risus viverra adipiscing at in tellus. Sed nisi lacus sed viverra tellus in hac habitasse. Lectus vestibulum mattis ullamcorper velit. Nisi porta lorem mollis aliquam ut porttitor leo. </p>
        <Button text='View Gallery' link='#gallery' />
        <Button text='Premade Emotes' link='https://twoartwork.etsy.com' style='outline' external='true' />
      </PageBlurb>
      <ContentInner>
        <EmoteGrid 
          emotes={[
            '/images/lux_cute.png',
            '/images/lux_giggle.png',
            '/images/lux_wave.png'
          ]}
        />
        <h3>Simple Emotes</h3>
        <p><i>line art, flat colour, simple shading</i></p>
        <ul>
          <li>1 emote: $35 cad</li>
          <li>3 emote: $95 cad</li>
          <li>5 emote: $155 cad</li>
        </ul>
        <EmoteGrid 
          emotes={[
            '/images/ahri_drool.png',
            '/images/ahri_thumbsup.png',
            '/images/piratekingashe_happy.png'
          ]}
        />
        <h3>Detailed Emotes</h3>
        <p><i>line art, flat colour, detailed shading</i></p>
        <ul>
          <li>1 emote: $40 cad</li>
          <li>3 emote: $110 cad</li>
          <li>5 emote: $180 cad</li>
        </ul>
        <EmoteGrid 
          emotes={[
            '/images/kda_akali_peace.png',
            '/images/kda_akali_ramen.png',
            '/images/kda_akali_kek.png'
          ]}
        />
        <h3>Painted Emotes</h3>
        <p><i>painted style for line art and colour</i></p>
        <ul>
          <li>1 emote: $45 cad</li>
          <li>3 emote: $125 cad</li>
          <li>5 emote: $205 cad</li>
        </ul>
        <ImportantContent>
          prices are based on time that I spend on creating the emotes and revisions
        </ImportantContent>
        <h3>Before We Start</h3>
        <ul>
          <li>message me with details of the commission you would like, including: reference images, ideas, colour palette, expressions</li>
          <li>I will determine if I feel capable of delivering a commission that meets your wants</li>
          <li>please refer to my previous work for style and capabilities, I cannot promise anything outside of my previous work</li>
          <li>payment is through paypal, there will be no refunds</li>
        </ul>
        <h3>Process</h3>
        <ol>
          <li>discussion of general idea and theme/style and payment</li>
          <li>send basic sketch & feedback changes (major changes need to be done here)</li>
          <li>flat colours & feedback changes</li>
          <li>
            complete lineart and colour
            <ul>
              <li>if you are buying a set (more than one emote), I will finalize shading of first emote and send for feedback before I complete the remaining</li>
            </ul>
          </li>
          <li>send for feedback and final adjustments (no major changes, these should be done during sketches)</li>
          <li>delivery of final set in the sizes below</li>
        </ol>
        <h4>Sizes</h4>
        <EmoteSizes />
        <ImportantContent>
          if you would like to request another size, please let me know
        </ImportantContent>
        <h3>Other Details</h3>
        <ul>
          <li>responses in a timely matter will help me keep the process going</li>
          <li>extra revisions: $20 per hour, min 1 hour (outside of revisions during the process)</li>
        </ul>
        <h3>Terms of Service</h3>
        <ul>
          <li>I have a right to post my work on socials / portfolios / websites</li>
          <li>payment is to be confirmed before any work is delivered</li>
          <li>all commissions are for personal use, please do not resell</li>
          <li>payment is through paypal, there will be no refunds</li>
        </ul>
        <h3>Let's Get Started</h3>
        <ul>
          <li>email me at <Link to="mailto:twoartwork@gmail.com">twoartwork@gmail.com</Link> if you are interested in a set of emotes!</li>
        </ul>
        <EmoteGrid 
          id="gallery"
          emotes={[
            '/images/kda_akali_peace.png',
            '/images/kda_akali_ramen.png',
            '/images/kda_akali_kek.png'
          ]}
        />
      </ContentInner>
    </Content>
  )
}
