import React, {useState, useEffect} from 'react';
import Axios from "axios";
import {
  Button,
  ButtonGroup,
  ChakraProvider,
  Select,
  Table,
  Tag,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  theme,
} from '@chakra-ui/react';
import {
  ArrowBackIcon,
} from '@chakra-ui/icons';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './App.css';

function App() {
  const [fileMetadata, setFilesMetadata] = useState({});
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(undefined);
  const [conceptToViewState, setConceptToViewState] = useState({});
  const [selectedConcept, setSelectedConcept] = useState(undefined);

  const randColor = () => '#'+(Math.random()*0xFFFFFF<<0).toString(16);

  useEffect(()=>{
    Axios("./scriptMetadata.json").then(res => {
      const conceptToViewState = {};
      Object.keys(res.data).forEach(script => {
        const data = res.data[script]
        if (conceptToViewState[data.concept] === undefined) {
          conceptToViewState[data.concept] = {color: randColor(), visible: true};
        }
      });
      setFilesMetadata(res.data);
      setConceptToViewState(conceptToViewState);
    });
    Axios("./scripts").then(res => {
      setFiles(res.data);
    });
  },[]);

  const evaluate = (script) => {
    console.clear();
    try {
      eval.call(window, script);
    } catch (err) {
      console.error(err);
    }
  };

  const view = (fileName) => {
    Axios("./scripts/" + fileName).then(res => {
      setSelectedFile(res.data);
    });
  };

  const hide = () => {
    setSelectedFile(undefined);
  }

  const select = (event) => {
    const selectedConcept = event.target.value;
    const newConceptToViewState = JSON.parse(JSON.stringify(conceptToViewState)); // TODO: hack
    Object.keys(newConceptToViewState).forEach(concept => {
      !selectedConcept || concept === selectedConcept ? newConceptToViewState[concept].visible = true : newConceptToViewState[concept].visible = false
    });
    setConceptToViewState(newConceptToViewState);
    setSelectedConcept(selectedConcept);
  }
 
  return (
    <ChakraProvider theme={theme}>
      <div>
      {selectedFile !== undefined
      ?
        <div>
          <SyntaxHighlighter language="javascript" style={docco} className="code-viewer">
            {selectedFile}
          </SyntaxHighlighter>
          <ButtonGroup className="code-viewer-buttons">
            <Button leftIcon={<ArrowBackIcon />} onClick={hide}>Back to Table</Button>
            <Button onClick = {() => evaluate(selectedFile)} colorScheme="green">Run</Button>
          </ButtonGroup>
        </div>
      :
        <div>
          <div className="concept-selector">
            <Select placeholder="Select Concept" value={selectedConcept} onChange={select}>
              {Object.keys(conceptToViewState).map(concept => <option value={concept}>{concept}</option>)}
            </Select>
          </div>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>File name</Th>
                <Th>Concept</Th>
                <Th>Description</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {files.filter(file => (conceptToViewState[fileMetadata[file].concept] !== undefined && conceptToViewState[fileMetadata[file].concept].visible)).map(file =>
                <>
                  <Tr key={file}>
                    <Td>{file}</Td>
                    <Td><Tag size="md" variant="solid" backgroundColor={conceptToViewState[fileMetadata[file].concept].color}>{fileMetadata[file] != undefined ? fileMetadata[file].concept : ""}</Tag></Td>
                    <Td>{fileMetadata[file] != undefined ? fileMetadata[file].desc : ""}</Td>
                    <Td>
                      <ButtonGroup>
                        <Button onClick = {() => view(file)} size="sm" colorScheme="blue">View</Button>
                      </ButtonGroup>
                    </Td>
                  </Tr>
                </>
              )}
            </Tbody>
          </Table>
        </div>
      }
      </div>
    </ChakraProvider>
  );
}

export default App;
