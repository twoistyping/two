import React from 'react'
import { Link } from 'react-router-dom'
import PageLabel from '../components/PageLabel'

export default function Guide() {
  return (
    <div className="content">
      <PageLabel />
      <h2>Lorem ipsum dolor sit amet</h2>
      <h3>Lorem ipsum dolor sit amet</h3>
      <h4>Lorem ipsum dolor sit amet</h4>
      <ul>
        <li>Lorem ipsum dolor sit amet
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
            </li>
            <li>Lorem ipsum dolor sit amet</li>
          </ul>
        </li>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Lorem ipsum dolor sit amet</li>
      </ul>

      <ol>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Lorem ipsum dolor sit amet</li>
      </ol>

      <p className="important">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ultrices neque ornare aenean euismod elementum nisi quis. Arcu bibendum at varius vel pharetra vel. </p>

      <p>Lorem ipsum dolor sit amet, <b>consectetur adipiscing elit</b>, sed do eiusmod <Link to="/guide">tempor incididunt</Link> ut labore et dolore magna aliqua. Et ultrices neque ornare aenean euismod elementum nisi quis. Arcu bibendum at varius vel pharetra vel. Pretium nibh ipsum consequat nisl. Mauris a diam maecenas sed enim ut sem. At risus viverra adipiscing at in tellus. Sed nisi lacus sed viverra tellus in hac habitasse. Lectus vestibulum mattis ullamcorper velit. Nisi porta lorem mollis aliquam ut porttitor leo. Accumsan in nisl nisi scelerisque eu ultrices. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Tincidunt tortor aliquam nulla facilisi. Congue nisi vitae suscipit tellus mauris a diam maecenas. Ultricies mi quis hendrerit dolor magna eget est lorem. Sed sed risus pretium quam vulputate dignissim suspendisse in. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Duis convallis convallis tellus id interdum velit laoreet id donec.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ultrices neque ornare aenean euismod elementum nisi quis. Arcu bibendum at varius vel pharetra vel. Pretium nibh ipsum consequat nisl. Mauris a diam maecenas sed enim ut sem. At risus viverra adipiscing at in tellus. Sed nisi lacus sed viverra tellus in hac habitasse. Lectus vestibulum mattis ullamcorper velit. Nisi porta lorem mollis aliquam ut porttitor leo. </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ultrices neque ornare aenean euismod elementum nisi quis. Arcu bibendum at varius vel pharetra vel. Pretium nibh ipsum consequat nisl. Mauris a diam maecenas sed enim ut sem. At risus viverra adipiscing at in tellus. Sed nisi lacus sed viverra tellus in hac habitasse. Lectus vestibulum mattis ullamcorper velit. Nisi porta lorem mollis aliquam ut porttitor leo. Accumsan in nisl nisi scelerisque eu ultrices. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Tincidunt tortor aliquam nulla facilisi. Congue nisi vitae suscipit tellus mauris a diam maecenas. Ultricies mi quis hendrerit dolor magna eget est lorem. Sed sed risus pretium quam vulputate dignissim suspendisse in. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Duis convallis convallis tellus id interdum velit laoreet id donec.</p>
    </div>
  )
}
