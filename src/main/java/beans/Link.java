/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package beans;

/**
 *
 * @author fred
 */
public class Link {
    private String absolutePath;
    private String chapter;
    private String folder;
    private String page;
    private String html;

    public Link() {
    }

    public Link(String absolutePath, String chapter, String folder, String page, String html) {
        this.absolutePath = absolutePath;
        this.chapter = chapter;
        this.folder = folder;
        this.page = page;
        this.html = html;
    }


    /**
     * @return the chapter
     */
    public String getChapter() {
        return chapter;
    }

    /**
     * @param chapter the chapter to set
     */
    public void setChapter(String chapter) {
        this.chapter = chapter;
    }

    /**
     * @return the folder
     */
    public String getFolder() {
        return folder;
    }

    /**
     * @param folder the folder to set
     */
    public void setFolder(String folder) {
        this.folder = folder;
    }

    /**
     * @return the page
     */
    public String getPage() {
        return page;
    }

    /**
     * @param page the page to set
     */
    public void setPage(String page) {
        this.page = page;
    }

    /**
     * @return the absolutePath
     */
    public String getAbsolutePath() {
        return absolutePath;
    }

    /**
     * @param absolutePath the absolutePath to set
     */
    public void setAbsolutePath(String absolutePath) {
        this.absolutePath = absolutePath;
    }

    /**
     * @return the html
     */
    public String getHtml() {
        return html;
    }

    /**
     * @param html the html to set
     */
    public void setHtml(String html) {
        this.html = html;
    }
    
}
