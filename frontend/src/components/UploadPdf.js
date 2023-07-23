import React from 'react'
import { useState } from 'react'

import { storage } from '../firebaseconfig.js'
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
} from "firebase/storage";

export default function UploadPdf() {
    const [Pdf, setPdf] = useState(null);

    const upload = (e) => {
        e.preventDefault();
        if (Pdf === null) {
            return;
        }

        const PdfRef = ref(storage, '/pdfs/' + Pdf.name);

        uploadBytes(PdfRef, Pdf).then((snapshot) => {
            // Upload successful, you can now get the download URL
            getDownloadURL(snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                alert('File uploaded successfully.');
            }).catch((error) => {
                console.error('Error getting download URL:', error);
            });
        }).catch((error) => {
            console.error('Error uploading the file:', error);
            alert('Error uploading the file.');
        });

    };

    return (
        <div>
            <form>
                <input
                    type="file"
                    name="pdf"
                    accept="application/pdf"
                    onChange={(e) => {
                        setPdf(e.target.files[0]);
                    }}
                />
                <input type="submit" onClick={upload} value="Upload" />
            </form>
        </div>
    );
}
