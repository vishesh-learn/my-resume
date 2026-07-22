import './style/main.scss';
import './style/media-query.scss';

import { Component } from 'solid-js';
import data from './data.json' with { type: "json" };

// const data = json as any;

const App: Component = () => {

  return (
    <div class="document">
      <div class="section name">
        <span class="first-name">{data.name.firstName}</span><br />
        <span class="last-name">{data.name.lastName}</span>
      </div>

      <div class="section role">{data.role}</div>

      <div class="section contact">
        <span class="field">{data.contact.address}</span><br />
        <a class="email field" href={`mailto:${data.contact.email}`}>
          {data.contact.email}
        </a>
        <span> | </span>
        <span class="field">{data.contact.phone}</span><br />

        {
          data.links.length && data.links.map(link =>
            <div>
              {link["label"]}: <a target="_blank" href={`https://${link["value"]}`}>
                {link["value"]}
              </a>
            </div>
          )}
      </div>

      <div class="section summary">
        <div class="heading">Professional Summary</div>
        <div class="paragraph">
          <div class="field">
            <p>
              {data.professionalSummary}
            </p>
          </div>
        </div>
      </div>

      <div class="section skills">
        <div class="heading">Skills</div>
        <div class="paragraph">
          <ul class="dot-list">
            {
              data.skills.map(skill =>
                skill["category"] ?
                  <li>
                    <b>{skill.category}:</b>
                    <ul>

                      {
                        skill.items.map(item =>
                          <li>
                            {
                              typeof item == "string" ? item : item.join(", ")
                            }
                          </li>
                        )
                      }
                    </ul>
                  </li>
                  :
                  <ul>

                    {
                      skill.items.map(item =>
                        <li>
                          {
                            typeof item == "string" ? item : item.join(", ")
                          }
                        </li>
                      )
                    }
                  </ul>
              )
            }
          </ul>
        </div>
      </div>

      <div class="section history">
        <div class="doc-item">
          <div class="heading">Work History</div>

          {
            data.workHistory.map(workHistory =>
              <div class="paragraph">
                <span class="paddedline">
                  <span class="jobtitle">{workHistory.jobTitle}</span><span> | </span>
                  <span class="companyname">{workHistory.companyName}</span>
                  <span> - </span>
                  <span class="joblocation jobcity">{workHistory.jobLocation}</span>

                  <span class="datesWrapper">
                    <span class="jobdates">{workHistory.dates.from}</span>
                    <span> - </span>
                    <span class="jobdates">{workHistory.dates.to}</span>
                  </span>
                </span>

                <ul class="jobline">
                  {
                    workHistory.description.map(description =>
                      <li>{description}</li>
                    )
                  }
                </ul>
              </div>
            )
          }
        </div>
      </div>

      <div class="section projects">
        <div class="heading">Key Projects</div>

        <ul class="paragraph">

          {
            data.projects.map(project =>
              <li id="dotbox">
                <h4 class="title">{project.title}</h4>

                <p class="desc">
                  {project.description}
                </p>

                <p class="tech-stack">
                  <b>Tech:</b> {project.used.join(", ")}
                </p>

                {
                  project.links.map(link =>
                    <p class="labeled-link">
                      {link.label}: <a href={`https://${link.value}`}
                        target="_blank">{link.value}</a>
                    </p>
                  )
                }
              </li>
            )
          }
        </ul>
      </div>

      <div class="section education">
        <div class="heading">Education</div>
        <div class="sortableInner">
          {
            data.qualifications.map(qualification =>
              <div class="hBar-container paragraph">
                <div class="hBar">
                  <span class="paddedline">
                    <span class="school-name">{qualification.organisation}</span><span> - </span>
                    <span class="joblocation jobcity">{qualification.location}</span> - <span class="degree">{qualification.title}</span>
                  </span>
                </div>
                {
                  qualification.score && <><span>|</span> <i>{qualification.score}%</i></>
                }
                {
                  qualification.note && <><span>|</span><i>({qualification.note})</i></>
                }
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default App;
