/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package beans;

import java.io.File;
import javax.inject.Named;
import javax.enterprise.context.SessionScoped;
import java.io.Serializable;
import java.util.ArrayList;
import javax.faces.context.FacesContext;
import javax.servlet.ServletContext;

/**
 *
 * @author fred
 */
@Named(value = "bean")
@SessionScoped
public class bean implements Serializable {

    private String ctxPath;
    private String realPath;
    ArrayList<String> files;
    private ArrayList<Link> links;
    private ArrayList<String> directories;
    /**
     * Creates a new instance of bean
     */
    public bean() {
        ctxPath = FacesContext.getCurrentInstance().getExternalContext().getRequestContextPath();
        ServletContext ctx = (ServletContext) FacesContext.getCurrentInstance().getExternalContext().getContext();
        realPath = ctx.getRealPath("/");
        links=new ArrayList<Link>();
        files=new ArrayList<String>();
        directories=new ArrayList<String>();
        walk(realPath+"\\private\\textbook\\student_data_files\\DataFiles\\");
    }

    public ArrayList<String> getFiles(){
        return files;
    }
    private void walk(String path) {
        File root = new File(path);
        File[] list = root.listFiles();

        if (list == null) {
            return;
        }

        for (File f : list) {
            if (f.isDirectory()) {
                walk(f.getAbsolutePath());
                getDirectories().add(f.getAbsoluteFile().getAbsolutePath());
                System.out.println("Dir:" + f.getAbsoluteFile());
            } else {
                if(f.getAbsoluteFile().getAbsolutePath().contains("htm")){
                    String absolutePath=f.getAbsoluteFile().getAbsolutePath();
                    int i=absolutePath.lastIndexOf("private\\");
                    String pageTmp=absolutePath.substring(i);
                    String page=pageTmp.replace("\\", "/");
                    files.add(page);
                    int i2=page.lastIndexOf("DataFiles/");
                    int i3=page.lastIndexOf("DataFiles/");
                    String chapter=page.substring(i2+10,i2+9+10);
                    String folder=page.substring(i2+10+10);
                    folder=folder.substring(0,folder.indexOf("/"));
                    String html=page.substring(page.lastIndexOf("/")+1);
                    getLinks().add(new Link(absolutePath,chapter,folder,page,html));
                    System.out.println(absolutePath.substring(i));
                }
                System.out.println("File:" + f.getAbsoluteFile());
            }
        }
    }

    /**
     * @return the ctxPath
     */
    public String getCtxPath() {
        return ctxPath;
    }

    /**
     * @param ctxPath the ctxPath to set
     */
    public void setCtxPath(String ctxPath) {
        this.ctxPath = ctxPath;
    }

    /**
     * @return the realPath
     */
    public String getRealPath() {
        return realPath;
    }

    /**
     * @param realPath the realPath to set
     */
    public void setRealPath(String realPath) {
        this.realPath = realPath;
    }

    /**
     * @return the directories
     */
    public ArrayList<String> getDirectories() {
        return directories;
    }

    /**
     * @param directories the directories to set
     */
    public void setDirectories(ArrayList<String> directories) {
        this.directories = directories;
    }

    /**
     * @return the links
     */
    public ArrayList<Link> getLinks() {
        return links;
    }

    /**
     * @param links the links to set
     */
    public void setLinks(ArrayList<Link> links) {
        this.links = links;
    }

}
