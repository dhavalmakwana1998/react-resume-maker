import React from "react";
function ResumeTempOne(props) {
  const { name, email, phone, birthdate } = props;
  return (
    <>
      <div className="rela-block page">
        <div className="rela-block top-bar">
          <div className="caps name">
            <div className="abs-center">{name}</div>
          </div>
        </div>
        <div className="side-bar">
          <div className="logo">
            <p className="logo-text">{name ? name.split(" ") : "DM"}</p>
          </div>
          <p>123 My Place Drive</p>
          <p>Astoria, New York 11105</p>
          <p>{phone ? phone : "7600446773"}</p>
          <p>{email ? email : "email@gmail.com"}</p>
          <p>{birthdate ? birthdate : "26-01-1998"}</p>
          <br />
          <p className="rela-block social twitter">Twitter stuff</p>
          <p className="rela-block social pinterest">Pinterest things</p>
          <p className="rela-block social linked-in">Linked-in man</p>
          <p className="rela-block caps side-header">Expertise</p>
          <p className="rela-block list-thing">HTML</p>
          <p className="rela-block list-thing">CSS (Stylus)</p>
          <p className="rela-block list-thing">JavaScript & jQuery</p>
          <p className="rela-block list-thing">Killer Taste</p>
          <p className="rela-block caps side-header">Education</p>
          <p className="rela-block list-thing">Advanced potion making</p>
          <p className="rela-block list-thing">Degree in popping and locking</p>
          <p className="rela-block list-thing">Knitting game on point</p>
          <p className="rela-block list-thing">Culinary af</p>
        </div>
        <div className="rela-block content-container">
          <h2 className="rela-block caps title">Jr Front-End Developer</h2>
          <div className="rela-block separator"></div>
          <div className="rela-block caps greyed">Profile</div>
          <p className="long-margin">
            Retro DIY quinoa, mixtape williamsburg master cleanse bushwick
            tumblr chillwave dreamcatcher hella wolf paleo. Knausgaard semiotics
            truffaut cornhole hoodie, YOLO meggings gochujang tofu. Locavore ugh
            kale chips iPhone biodiesel typewriter freegan, kinfolk brooklyn
            kitsch man bun. Austin neutra etsy, lumbersexual paleo cornhole
            sriracha kinfolk meggings kickstarter.{" "}
          </p>
          <div className="rela-block caps greyed">Experience</div>

          <h3>Job #1</h3>
          <p className="light">First job description</p>
          <p className="justified">
            Plaid gentrify put a bird on it, pickled XOXO farm-to-table irony
            raw denim messenger bag leggings. Hoodie PBR&B photo booth, vegan
            chillwave meh paleo freegan ramps. Letterpress shabby chic fixie
            semiotics. Meditation sriracha banjo pour-over. Gochujang pickled
            hashtag mixtape cred chambray. Freegan microdosing VHS, 90's bicycle
            rights aesthetic hella PBR&B.{" "}
          </p>

          <h3>Job #2</h3>
          <p className="light">Second Job Description</p>
          <p className="justified">
            Beard before they sold out photo booth distillery health goth.
            Hammock franzen green juice meggings, ethical sriracha tattooed
            schlitz mixtape man bun stumptown swag whatever distillery blog.
            Affogato iPhone normcore, meggings actually direct trade lomo plaid
            franzen shoreditch. Photo booth pug paleo austin, pour-over banh mi
            scenester vice food truck slow-carb. Street art kogi normcore, vice
            everyday carry crucifix thundercats man bun raw denim echo park pork
            belly helvetica vinyl.{" "}
          </p>

          <h3>Job #3</h3>
          <p className="light">Third Job Description</p>
          <p className="justified">
            Next level roof party lo-fi fingerstache skateboard, kogi tumblr.
            Shabby chic put a bird on it chambray, 3 wolf moon swag beard
            brooklyn post-ironic taxidermy art party microdosing keffiyeh marfa.
            Put a bird on it 3 wolf moon cliche helvetica knausgaard. Mumblecore
            fingerstache lomo, artisan freegan keffiyeh paleo kinfolk kale chips
            street art blog flannel.
          </p>
        </div>
      </div>
    </>
  );
}

export default ResumeTempOne;
