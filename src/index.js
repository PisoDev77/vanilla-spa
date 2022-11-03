import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import Notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

function component() {
  const element = document.createElement('div');
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Lodsh', '다람쥐'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  const DataLoaderTest = document.createElement('div');
  DataLoaderTest.innerHTML = '<h1>Loading Datas</h1>';
  DataLoaderTest.innerHTML += Data;
  DataLoaderTest.innerHTML += Notes;

  element.appendChild(DataLoaderTest);

  const TomlYamlJson5 = document.createElement('div');
  TomlYamlJson5.innerHTML = '<h1>Loading Datas by Json5 Yaml Toml</h1>';
  TomlYamlJson5.innerHTML += toml.title;
  TomlYamlJson5.innerHTML += toml.owner.name;
  TomlYamlJson5.innerHTML += yaml.title;
  TomlYamlJson5.innerHTML += yaml.owner.name;
  TomlYamlJson5.innerHTML += json.title;
  TomlYamlJson5.innerHTML += json.owner.name;

  element.appendChild(TomlYamlJson5);

  return element;
}

document.body.appendChild(component());
