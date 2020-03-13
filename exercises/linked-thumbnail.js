try {
  function linkedThumbnail(obj) {
    const newDiv = document.createElement("div");
    newDiv.className = "thumbnail-container";

    const aElement = document.createElement("a");
    aElement.className = "to-the-right";
    aElement.target = "_blank";
    aElement.href = obj.src;

    newDiv.appendChild(aElement);

    const imgEl = document.createElement("img");
    imgEl.src = obj.src;
    imgEl.className = "thumbnail";
    imgEl.alt = "the color " + obj[0];
    aElement.appendChild(imgEl);

    return newDiv;
  }

  testComponent.attributesToTest = [
    "nodeName",
    "innerText",
    "target",
    "childElementCount",
    "href",
    "children",
    "className"
  ];

  const testCases = [
    {
      name: "first",
      args: [
        {
          color: "black",
          src:
            "https://upload.wikimedia.org/wikipedia/commons/8/81/Color_icon_black.png"
        }
      ],
      expected: {
        nodeName: "DIV",
        childElementCount: 1,
        className: "thumbnail-container",
        children: [
          {
            nodeName: "A",
            childElementCount: 1,
            target: "_blank",
            className: "to-the-right",
            href:
              "https://upload.wikimedia.org/wikipedia/commons/8/81/Color_icon_black.png",
            children: [
              {
                nodeName: "IMG",
                childElementCount: 0,
                src:
                  "https://upload.wikimedia.org/wikipedia/commons/8/81/Color_icon_black.png",
                className: "thumbnail",
                alt: "the color black"
              }
            ]
          }
        ]
      }
    },
    {
      name: "second",
      args: [
        {
          color: "red",
          src:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Color_icon_red.svg/240px-Color_icon_red.svg.png"
        }
      ],
      expected: {
        nodeName: "DIV",
        childElementCount: 1,
        className: "thumbnail-container",
        children: [
          {
            nodeName: "A",
            childElementCount: 1,
            className: "to-the-right",
            target: "_blank",
            href:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Color_icon_red.svg/240px-Color_icon_red.svg.png",
            children: [
              {
                nodeName: "IMG",
                childElementCount: 0,
                src:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Color_icon_red.svg/240px-Color_icon_red.svg.png",
                className: "thumbnail",
                alt: "the color red"
              }
            ]
          }
        ]
      }
    },
    {
      name: "third",
      args: [
        {
          color: "purple",
          src:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Color_icon_purple_v2.svg/240px-Color_icon_purple_v2.svg.png"
        }
      ],
      expected: {
        nodeName: "DIV",
        childElementCount: 1,
        className: "thumbnail-container",
        children: [
          {
            nodeName: "A",
            childElementCount: 1,
            className: "to-the-right",
            target: "_blank",
            href:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Color_icon_purple_v2.svg/240px-Color_icon_purple_v2.svg.png",
            children: [
              {
                nodeName: "IMG",
                childElementCount: 0,
                src:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Color_icon_purple_v2.svg/240px-Color_icon_purple_v2.svg.png",
                className: "thumbnail",
                alt: "the color purple"
              }
            ]
          }
        ]
      }
    }
  ];

  const div = document.createElement("div");

  const header = document.createElement("h2");
  header.innerText = linkedThumbnail.name;
  div.id = linkedThumbnail.name;
  div.appendChild(header);
  div.appendChild(document.createElement("br"));

  testComponent(linkedThumbnail, testCases, div);

  document.getElementById("rendered-components").appendChild(div);
  document
    .getElementById("rendered-components")
    .appendChild(document.createElement("hr"));
} catch (err) {
  console.log(err);
}
